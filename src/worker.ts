export default {
  async fetch(): Promise<Response> {
    // Static assets are served automatically by the [assets] binding.
    // This worker only handles requests that don't match a static file.
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler;
