using static System.Runtime.InteropServices.JavaScript.JSType;

namespace GtinApi.Helpers;


public static class GtinHelper
{
    public static int CalculateCheckDigit(string number)
    {
        if (string.IsNullOrWhiteSpace(number) || number.Length < 7 || number.Length > 13 || !number.All(char.IsDigit))
        {
            throw new ArgumentException("Input must be a numeric string with 7 to 13 digits.");
        }

        int sum = 0;

        for (int i = 0; i < number.Length; i++)
        {
            int digit = number[i] - '0';

            sum += digit * ((i + 1) % 2 == 0 ? 3 : 1);
        }

        int mod = sum % 10;
        return mod == 0 ? 0 : 10 - mod;
    }


    public static string AppendCheckDigit(string number)
    
        int checkDigit = CalculateCheckDigit(number);
        return number + checkDigit;
    }
}
