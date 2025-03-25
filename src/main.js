import { meet } from '@googleworkspace/meet-addons/meet.addons';

const CLOUD_PROJECT_NUMBER = '738129672596';
const MAIN_STAGE_URL =
  'https://andamagodwin.github.io/lingomeet-addon-Beta/src/MainStage.html';

async function setUpAddon() {
  const session = await meet.addon.createAddonSession({
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
  });
  const sidePanelClient = await session.createSidePanelClient();
  document
    .getElementById('start-activity')
    .addEventListener('click', async () => {
      await sidePanelClient.startActivity({ mainStageUrl: MAIN_STAGE_URL });
    });
}

async function initializeMainStage() {
  const session = await meet.addon.createAddonSession({
    cloudProjectNumber: CLOUD_PROJECT_NUMBER,
  });
  await session.createMainStageClient();
}

// Explicitly attach functions to window object
window.helloWorld = {
  setUpAddon,
  initializeMainStage
};
