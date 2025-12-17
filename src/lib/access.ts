export const ACCESS_KEY = "itsai_access";

export function hasAccess(): boolean { return localStorage.getItem(ACCESS_KEY) === "true"; }

export function grantAccess(): void { localStorage.setItem(ACCESS_KEY, "true"); }

export function revokeAccess(): void { localStorage.removeItem(ACCESS_KEY); }
