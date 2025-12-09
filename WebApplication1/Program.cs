var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Enable serving static files from wwwroot
app.UseStaticFiles();

app.Run();
