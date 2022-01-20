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
        [Range(0, 100)]
        public float assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public float GroupProj { get; set; }
        [Required]
        [Range(0, 100)]
        public float quizes { get; set; }
        [Required]
        [Range(0, 100)]
        public float exams { get; set; }
        [Required]
        [Range(0, 100)]
        public float intex { get; set; }
    }
}
