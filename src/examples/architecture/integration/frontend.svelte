<script lang="ts">
  import { PostCard } from "@cohera/posts/ui";
  import { EventCard } from "@cohera/events/ui";
  import { listEvents, listPosts } from "$lib/remote/cohera.remote";
</script>

<section>
  <h2>Recent Posts</h2>
  {#each await listPosts() as post (post.id)}
    <PostCard {post} />
  {/each}
</section>

<section>
  <h2>Upcoming Events</h2>
  {#each await listEvents() as event (event.id)}
    <EventCard {event} />
  {/each}
</section>
