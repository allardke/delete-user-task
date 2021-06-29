import { Task } from './models/Task';
import { authenticateSDK } from './services/sdk';

export async function handler(task: Task) {
  await authenticateSDK();

  console.log(task);
}
