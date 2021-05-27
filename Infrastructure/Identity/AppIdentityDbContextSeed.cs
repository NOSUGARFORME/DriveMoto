using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Mike",
                    Email = "mike@test.com",
                    UserName = "mike@test.com",
                    Address = new Address
                    {
                        FirstName = "Mike",
                        LastName = "Stone",
                        Street = "Some street",
                        City = "Some city",
                        State = "Some state",
                        Zipcode = "234142"
                    }
                };

                await userManager.CreateAsync(user, "Qwerty1@3");
            }
        }
    }
}