using Microsoft.AspNetCore.Mvc;
using mission2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission2.Controllers
{
    public class BasicController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Calculator ()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calculator (CalculatorModel model)
        {
            return View();
        }
    }
}
