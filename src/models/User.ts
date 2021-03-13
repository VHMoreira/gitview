interface User {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    name?: string;
    bio?: string;
    public_repos: number;
    followers: number;
    following: number;
}

export default User;