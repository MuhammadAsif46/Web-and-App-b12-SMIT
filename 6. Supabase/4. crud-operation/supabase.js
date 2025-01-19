const { createClient } = supabase;

// Create a single supabase client for interacting with your database
const project_url = "<your-project-url>";
const project_api_key ="<your-api-key>"
export const supabaseConf = createClient(project_url, project_api_key);
