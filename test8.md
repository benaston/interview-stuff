Take the following ‘system’:

`
    public interface IAuthorisationService
    {
        void Authorise(AuthorisationRequest request);
    }
    
    public class AuthorisationService : IAuthorisationService
    {
    
        public void Authorise(AuthorisationRequest request)
        {
            //Authorisation code
        }
    }
    
    public class AuthorisationRequest
    {
    }
`

Discuss at a high level how you might add code to instrument the `Authorisation` function, logging the average execution time & number of executions.


