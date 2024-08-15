import { Role } from '../user-management/entities';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(Role, (faker) => {
  const role = new Role();
  role.name = faker.name.firstName('male');

  return role;
});
