using System;

public class SSCCgenerator
{
	private readonly string gs1CompanyPrefix;
	private int serialNumber;
	private readonly char extensionDigit;

	public SSCCgenerator(string gs1CompanyPrefix, int initialSerialNumber = 0, char extensionDigit = '0')
	{
		if (stirng.IsNullOrEmpty(gs1CompanyPrefix))
			throw new ArgumentException ("GS1 Company Prefix cannot be null or empty.");
		if (extensionDigit < '0' || extensionDigit > '9')
			throw new ArgumentException("Extension digit must be a digit between '0' and '9'.");

		this.gs1CompanyPrefix = gs1CompanyPrefix;
		this.serialNumber = initialSerialNumber;
		this.extensionDigit = extensionDigit;
    }

	public string GenerateSSCC()
	{
		//Dolžina GS1 prefiksa
		int gs1Length = gs1CompanyPrefix.Length;

        //Dolžina serijske številke = 17 - 1 (extension digit) - gs1Length
		int serialNumberLength = 17 - 1 - gs1Length;

		if (serialNumberLength <= 0)
			throw new InvalidOperationException ("GS1 Company Prefix is too long.");

        //Formatiramo serijsko številko z vodilnimi ničlami
		string serialNumberStr = serialNumber.ToString().PadLeft(serialNumberLength, '0');

		//Sestavimo prvih 17 mest

    }
}
