using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web;
using System.Linq;
using System.Threading.Tasks;

namespace mission2.Models
{
    public class CalculatorModel
    {
        [Required]
        
        public float assignments { get; set; }
        [Required]
        
        public float GroupProj { get; set; }
        [Required]
        
        public float quizes { get; set; }
        [Required]
        
        public float exams { get; set; }
        [Required]
     
        public float intex { get; set; }
    }
}
