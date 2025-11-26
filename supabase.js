(function () {
  const SUPABASE_URL = "https://kjmyyewjwgaxnlacszja.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqbXl5ZXdqd2dheG5sYWNzemphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTY2OTUsImV4cCI6MjA3OTYzMjY5NX0.x1X8wpoFzERH4ZOxoDi-7OHzWmsqvbt8nGJpM2G_p8w";

  window.db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();
