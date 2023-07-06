export interface User {
  id?: number;
  username?: string;
  password?: string;
  password_hash?: string;
  email?: string;
  created_at?: Date;
}

export interface Message {
  id?: number;
  sender_id: string;
  conversation_id: number | null;
  group_id: number | null;
  content: string;
  created_at?: Date;
}

export interface GroupMember {
  user_id?: number;
  group_id?: number;
  joined_at?: Date;
}

export interface Group {
  id?: number;
  name: string;
  created_at: Date;
}

export interface DirectConversation {
  id?: string;
  user_1_id: number;
  user_2_id: number;
  user_1?: string;
  user_2?: string;
}
