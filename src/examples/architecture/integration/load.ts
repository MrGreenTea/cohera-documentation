import { listEvents, listPosts } from "$lib/remote/cohera.remote";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  return {
    posts: await listPosts(),
    events: await listEvents(),
  };
};
