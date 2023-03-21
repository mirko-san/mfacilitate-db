type Config = {
  host: string;
  username: string;
  password: string;
}

export const config: Config = {
  host: Deno.env.get('DB_HOST') ?? '',
  username: Deno.env.get('DB_USERNAME') ?? '',
  password: Deno.env.get('DB_PASSWORD') ?? '',
};
