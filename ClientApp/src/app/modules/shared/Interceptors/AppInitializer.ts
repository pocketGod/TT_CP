import { environment } from "src/environments/environment";
import { AuthService } from "../services/auth.service";

export function appInitializer(authService: AuthService) {
  return () => authService.siteLogin(environment.sitePass).toPromise();
}