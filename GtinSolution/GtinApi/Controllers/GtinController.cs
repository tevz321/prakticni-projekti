using GtinApi.Helpers;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace GtinApi.Controllers;

public class NumberRequest
{
    public string Number { get; set; }
}

[ApiController]
[Route("api/[controller]")]
public class GtinController : ControllerBase
{
    [HttpPost("generate")]
    public ActionResult<List<string>> Generate([FromBody] int count)
    {
        var result = new List<string>();
        var rand = new Random();


        for (int i = 0; i < count; i++)
        { 
            var baseNumber = rand.Next(100000, 999999).ToString() +
                             rand.Next(100000, 999999).ToString(); 
            var checkDigit = GtinHelper.CalculateCheckDigit(baseNumber);
            result.Add(baseNumber + checkDigit);
        }


        return Ok(result);
    }


    [HttpPost("checkdigit")]
    public ActionResult<string> CheckDigit([FromBody] NumberRequest number)
    {
        if (string.IsNullOrEmpty(number.Number) || number.Number.Length < 7 || number.Number.Length > 13)
        {
            return BadRequest("Številka mora imeti med 7 in 13 znakov.");
        }


        var checkDigit = GtinHelper.CalculateCheckDigit(number.Number);
        return Ok($"{number.Number}{checkDigit}");
    }
}