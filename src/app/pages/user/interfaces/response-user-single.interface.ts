export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}


export interface Support {
  url: string;
  text: string;
}

export interface IResponseUserSingle {
  data: IUser;
  support: Support
}
