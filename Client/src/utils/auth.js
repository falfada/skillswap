import { jwtDecode } from 'jwt-decode';

class AuthService {
    // Retrieve user profile information from the token
    getProfile() {
        try {
            return jwtDecode(this.getToken());
        } catch (err) {
            console.error('Failed to decode token:', err);
            return null;
        }
    }
    // Check if the user is logged in by verifying the presence and validity of the token
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
    // Check if the token has expired
    isTokenExpired(token) {
        try {
            const decoded = jwtDecode(token);
            return decoded.exp < Date.now() / 1000;
        } catch (err) {
            console.error('Failed to verify token expiration:', err);
            return false;
        }
    }
    // Retrieve the token from localStorage
    getToken() {
        return localStorage.getItem('id_token');
    }
    // Save the token to localStorage and redirect to the homepage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }
    // Remove the token from localStorage and reset the application state
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}
export default new AuthService();