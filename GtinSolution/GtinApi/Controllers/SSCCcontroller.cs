using GtinApi.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace GtinApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SSCCcontroller : ControllerBase
    {
        [HttpPost("generate")]
        public IActionResult Generate([FromBody] SSCCRequestModel request)
        {
            try
            {
                var generator = new SSCChelper(request.Gs1CompanyPrefix, request.InitialSerialNumber, request.ExtensionDigit);

                string sscc = generator.GenerateSSCC();
                return Ok(sscc);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }

    public class  SSCCRequestModel
    {
        public string Gs1CompanyPrefix { get; set; } = string.Empty;
        public int InitialSerialNumber { get; set; } = 0;
        public char ExtensionDigit { get; set; } = '0'; 
    }
}