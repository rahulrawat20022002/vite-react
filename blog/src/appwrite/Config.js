import { Client, Databases, ID, Query } from "appwrite";
import conf from "../conf/Conf";

class Service {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Bucket(this.client);
  }

  async createPost({ slug, content, title, status, featuredImage, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          content,
          title,
          status,
          featuredImage,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
    }
  }

  //To use queries you must to define indexes in your appwrite database
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }

  async fileUpload(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async fileDelete(file) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, file);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }
  getfilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
