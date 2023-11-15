import { Client, Account, ID } from "appwrite";
import conf from "../conf/Conf";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, ID }) {
    try {
      const response = await this.account.create(ID.unique(), email, password);
      if (response) {
        //call another function
        this.login(email, password);
      } else {
        return response;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const response = await this.account.createEmailSession(email, password);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getCurrnetUser() {
    try {
      const response = await this.account.get();
      return response;
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logout() {
    try {
      const response = await this.account.deleteSessions();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
const authService = new AuthService();

export default authService;
