import React, { useEffect } from "react";
import service from "../../appwrite/Config";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RTE, Select, Input, Button } from "../../components/index";
function PostForm({ post }) {
  const { handleSubmit, control, watch, register, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post ? post.title : "content",
        slug: post ? post.$id : "",
        content: post ? post.content : "",
        status: post ? post.status : active,
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.img[0] ? service.fileUpload(data.img[0]) : null;
      if (file) {
        const deletefile = await service.fileDelete(post.featuredImage);
      }
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${post.$id}`);
      }
    } else {
      const file = data.img[0] ? service.fileUpload(data.img[0]) : undefined;
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${post.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .toLowerCase()
        .trim()
        .replace(/^[a-zA-Z\d]+g/, "-");
    }

    return "";
  });

  useEffect(() => {
    const subscription = watch((values, { name }) => {
      if (name === "title")
        setValue("slug", slugTransform(values.title), { shouldValidate: true }); ///why defining two times
    });

    return () => subscription.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title"
          placeholder="Title"
          type="text"
          className="mb-4"
          {...register("title", { required: true })}
        />

        <Input
          label="slug"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) =>
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            })
          }
        />

        <RTE
          control={control}
          label="Content :"
          name="content"
          defaultValue={getValues("content")} ///not clear
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label={featuredImage}
          type="file"
          className="mb-4"
          {...register("image", { required: !post })}
          accept="image/png, image/jpg, image/jpeg, image/gif"
        />

        {post && (
          <div className="w-full mb-4">
            <img
              src={service.getfilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}

        <Select
          label="Status"
          className="mb-4"
          option={["active,inactive"]}
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : ""}
          className="w-full"
        >
          {post ? "update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
