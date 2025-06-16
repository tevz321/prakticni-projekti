using System;
using System.Linq;

namespace GtinApi.Helpers
{
    public class SSCChelper
    {
        private readonly string gs1CompanyPrefix;
        private int serialNumber;
        private readonly char extensionDigit;

        public SSCChelper(string gs1CompanyPrefix, int initialSerialNumber = 0, char extensionDigit = '0')
        {
            if (string.IsNullOrEmpty(gs1CompanyPrefix))
                throw new ArgumentException("GS1 Company Prefix cannot be null or empty.");
            if (extensionDigit < '0' || extensionDigit > '9')
                throw new ArgumentException("Extension digit must be a digit between '0' and '9'.");

            this.gs1CompanyPrefix = gs1CompanyPrefix;
            this.serialNumber = initialSerialNumber;
            this.extensionDigit = extensionDigit;
        }

        public string GenerateSSCC()
        {
            int gs1Length = gs1CompanyPrefix.Length;
            int serialNumberLength = 17 - 1 - gs1Length;

            if (serialNumberLength <= 0)
                throw new InvalidOperationException("GS1 Company Prefix is too long.");

            string serialNumberStr = serialNumber.ToString().PadLeft(serialNumberLength, '0');
            string ssccWithoutCheckDigit = $"{extensionDigit}{gs1CompanyPrefix}{serialNumberStr}";

            char checkDigit = CalculateCheckDigit(ssccWithoutCheckDigit);
            string fullSSCC = ssccWithoutCheckDigit + checkDigit;

            serialNumber++;
            return fullSSCC;
        }

        private char CalculateCheckDigit(string input)
        {
            if (!input.All(char.IsDigit))
                throw new ArgumentException("Input must be numeric.");

            int sum = 0;
            bool multiplyByThree = true;

            
            for (int i = input.Length - 1; i >= 0; i--)
            {
                int digit = input[i] - '0';
                sum += multiplyByThree ? digit * 3 : digit;
                multiplyByThree = !multiplyByThree;
            }

            int modValue = sum % 10;
            int checkDigit = modValue == 0 ? 0 : 10 - modValue;

            return checkDigit.ToString()[0];
        }
    }
}
