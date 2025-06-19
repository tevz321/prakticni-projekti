using Microsoft.AspNetCore.Mvc;
using GtinApi.Helpers;

namespace GtinApi.Controllers
{
    [ApiController]
    [Route("api/sscc")]
    public class SSCCController : ControllerBase

    {
        public class SSCCRequest
        {
            public string Gs1CompanyPrefix { get; set; } = string.Empty;
            public string ExtensionDigit { get; set; } = "0"; 
            public int InitialSerialNumber { get; set; } = 0;
            public int Count { get; set; } = 1;
        }

        [HttpPost("generate")]
        public ActionResult<IEnumerable<string>> Generate([FromBody] SSCCRequest request)
        {
            if (string.IsNullOrEmpty(request.Gs1CompanyPrefix) || request.Gs1CompanyPrefix.Any(c => !char.IsDigit(c)))
                return BadRequest("Invalid GS1 Company Prefix");

            if (string.IsNullOrEmpty(request.ExtensionDigit) || request.ExtensionDigit.Length != 1 || !char.IsDigit(request.ExtensionDigit[0]))
                return BadRequest("Invalid extension digit");

            var generator = new SSCChelper(request.Gs1CompanyPrefix, request.InitialSerialNumber, request.ExtensionDigit[0]);

            var result = new List<string>();
            for (int i = 0; i < request.Count; i++)
            {
                result.Add(generator.GenerateSSCC());
            }

            return Ok(result);
        }
    }
}
