## Test5

*Given this controller, can you think of a pattern that might improve the user’s experience when using the back button having logged in?*

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
			return View("../reportissues/index");
		}

		dto.Password = string.Empty;
		dto.IsInvalidCredentialsMessageVisible = true;
		dto.ReturnUrl = string.Empty;

		return View("../login/index", dto);
	}
}
```
