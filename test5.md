## Test5

*Here is a controller with an action that is invoked when a log-in form is submitted. Can you think of a change that could be made to this implementation that might improve the user’s experience when using the browser back button?*

```C#
public class SessionController : Controller
{
  private readonly ILogInService _logInService;

	public SessionController(ILogInService logInService)
	{
		_logInService = logInService;
	}

	[HttpPost]
	public ActionResult Create(LoginDto dto)
	{
		if (_logInService.LogIn(dto.UserName, dto.Password))
		{
			return View("homepage");
		}

		dto.Password = string.Empty;
		dto.IsInvalidCredentialsMessageVisible = true;
		dto.ReturnUrl = string.Empty;

		return View("loginpage", dto);
	}
}
```
