export interface User {
    id: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    createdAt?: string;
    role?: string;
}

export interface Project {
    id: string;
    name: string;
    plan: string;
    createdAt: string;
    adminId: string;
    restaurants?: any;
    users?: User[];
}

export interface ProjectInvitation {
    id: string;
    createdAt: string;
    projectId: string;
    invitingUserId: string;
    invitedUserId: string;
    accepted: boolean;
    invitedUser?: User;
    invitingUser?: User;
    project?: Project;
}
