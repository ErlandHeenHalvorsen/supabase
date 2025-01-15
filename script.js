import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
// Supabase credentials
const SUPABASE_URL = "https://vyevibbjrqvwagsttqwe.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5ZXZpYmJqcnF2d2Fnc3R0cXdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5Mzk3NDIsImV4cCI6MjA1MjUxNTc0Mn0.zeOhl8dK1gDUxrWraxR-Td3e6ay5YIpZ5uiez-Y-xvg";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Add click event listener
document.getElementById("fetchBtn").addEventListener("click", async () => {
  try {
    // Fetch data from the "test_table"
    const { data, error } = await supabase.from("test_table").select("*");
    if (error) throw error;
    // Display data
    document.getElementById("results").innerHTML = `<ul>
 ${data.map((item) => `<li>${item.name}: ${item.description}</li>`).join("")}
 </ul>`;
  } catch (err) {
    console.error(err.message);
    document.getElementById("results").textContent = `Error: ${err.message}`;
  }
});
