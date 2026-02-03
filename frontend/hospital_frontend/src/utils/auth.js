import { jwtDecode } from 'jwt-decode';

/**
 * Get user info from JWT token
 * This is the SECURE way - decodes the actual token
 */
export const getUserFromToken = () => {
    const token = localStorage.getItem('access_token');
    
    if (!token) {
        return null;
    }
    
    try {
        const decoded = jwtDecode(token);
        return {
            userId: decoded.user_id,
            username: decoded.username,
            isSuperUser: decoded.is_superuser,
            isStaff: decoded.is_staff,
            exp: decoded.exp
        };
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};

/**
 * Get user info from localStorage
 * This is FASTER but less secure - use for UI only
 */
export const getUserFromStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

/**
 * Check if token is expired
 */
export const isTokenExpired = () => {
    const user = getUserFromToken();
    if (!user) return true;
    
    return Date.now() >= user.exp * 1000;
};

/**
 * Check if current user is super admin
 */
export const isSuperAdmin = () => {
    const user = getUserFromToken();
    return user?.isSuperUser || false;
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
    const token = localStorage.getItem('access_token');
    return !!token && !isTokenExpired();
};

/**
 * Logout user - clear all data
 */
export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
};