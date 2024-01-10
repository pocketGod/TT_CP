using GYM_MODELS.Settings;
using Microsoft.Extensions.Options;
using TT_CP.API.Bootstrap.DB;
using TT_CP.API.Bootstrap.Middlewares;
using TT_CP.API.Bootstrap.WF;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

MiddlewareBootstrap.Initialize(builder.Services, builder.Configuration);
DatabaseBootstrap.Initialize(builder.Services, builder.Configuration);
ServicesBootstrap.Initialize(builder.Services, builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

// Register JwtMiddleware here, before UseRouting
var jwtSettings = app.Services.GetRequiredService<IOptions<JwtSettings>>().Value;
app.UseMiddleware<JwtMiddleware>(jwtSettings);

app.UseRouting();
app.UseAuthorization(); // Make sure this comes after UseRouting and JwtMiddleware

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
