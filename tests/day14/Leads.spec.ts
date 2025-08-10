import { fixtures } from './CustomeFixture';

fixtures("Login fixture in use", async ({ login }) => {
  await login.click("text=CRM/SFA");
  console.log(await login.title());
});