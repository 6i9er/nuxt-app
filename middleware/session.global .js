export default defineNuxtRouteMiddleware( () => {
    const { session, refresh, update, reset } =  useSession();
}) ;