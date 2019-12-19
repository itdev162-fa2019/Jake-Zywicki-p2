using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
  public class Seed
  {
    public static void SeedData(DataContext context)
    {
      if (!context.Posts.Any())
      {
        var Posts = new List<Post>
            {
              new Post {
                Title = "Lebron James",
                Date = DateTime.Now.AddDays(-10),
                Body = "Lebron James is the best basketball player ever. There are no ifs, ands, or buts about it!"
              },
              new Post {
                Title = "Kobe Bryant",
                Date = DateTime.Now.AddDays(-7),
                Body = "Kobe Bryant is the most competitive winner there has been in basketball. Laker nation stand up!"
              },
              new Post {
                Title = "Michael Jordan",
                Date = DateTime.Now.AddDays(-4),
                Body = "Michael Jordan is the greatest of all time. He has 6 championships, a 3-peat two different times. The hardware speaks for itself."
              }
            };

        context.Posts.AddRange(Posts);
        context.SaveChanges();
      }
    }
  }
}