export type UserProfile = {
  uid: string;
  fullName: string;
  username: string;
  email: string;
  phoneNumber?: string;
  university: string;
  profilePhoto?: string;
  bio?: string;
  createdAt: string;
};

export type JobStatus = 'draft' | 'active' | 'in_progress' | 'awaiting_confirmation' | 'completed' | 'cancelled' | 'disputed';

export type Job = {
  id: string;
  employerId: string;
  workerId?: string;
  title: string;
  description: string;
  budget: number;
  category: string;
  deadline: string;
  campus: string;
  attachments: string[];
  urgent: boolean;
  status: JobStatus;
  createdAt: string;
};

export type JobApplication = {
  id: string;
  jobId: string;
  workerId: string;
  proposal: string;
  expectedCompletionTime: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
};

export type ProductCondition = 'new' | 'used' | 'refurbished';

export type Product = {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  quantity: number;
  condition: ProductCondition;
  campus: string;
  deliveryOptions: string;
  createdAt: string;
};

export type OrderStatus = 'pending_payment' | 'paid' | 'processing' | 'shipped' | 'out_for_delivery' | 'delivered' | 'awaiting_buyer_confirmation' | 'completed' | 'cancelled' | 'disputed';

export type Order = {
  id: string;
  buyerId: string;
  sellerId: string;
  listingId: string;
  type: 'job' | 'product';
  amount: number;
  status: OrderStatus;
  escrowStatus: 'held' | 'released' | 'refunded';
  createdAt: string;
};

export type Wallet = {
  userId: string;
  escrowBalance: number;
  availableBalance: number;
  updatedAt: string;
};

export type Chat = {
  id: string;
  participants: string[]; // array of uids
  lastMessage?: string;
  updatedAt: string;
};

export type Message = {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  type: 'text' | 'image' | 'file';
  createdAt: string;
};

export type Notification = {
  id: string;
  userId: string;
  title: string;
  content: string;
  type: string;
  read: boolean;
  createdAt: string;
};

export type University = {
  id: string;
  name: string;
};
