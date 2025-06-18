using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

static void Main(string[] args) { }

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy => policy.WithOrigins("http://localhost:4200")
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

builder.Services.AddControllers();
builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "/wwwroot");
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAngularApp");
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.UseSpaStaticFiles();

//SPA konfiguracija
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "/wwwroot";

    //Produkcijski fallback
    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions { 
        OnPrepareResponse = context => { if (context.File.Name == "index.html") { 
                context.Context.Response.Headers.Append("Cache-Control", "no-cache, no-store, must-revalidate");
                context.Context.Response.Headers.Append("Pragma", "no-cache"); 
                context.Context.Response.Headers.Append("Expires", "0"); 
            } 
        }, 
    };
});



app.Run();