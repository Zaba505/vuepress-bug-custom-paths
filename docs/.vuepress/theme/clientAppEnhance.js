import { defineClientAppEnhance } from '@vuepress/client'
import Custom from "./components/Custom.vue";

export default defineClientAppEnhance(({
  app,
  router,
  siteData
}) => {
  const home = router.getRoutes().find(r => r.path === '/');

  router.addRoute({
    ...home,
    alias: '/projects'
  })

  router.addRoute({
    path: '/custom',
    component: Custom
  })
});
