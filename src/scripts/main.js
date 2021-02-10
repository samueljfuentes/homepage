{
  // model/state
  const State = (() => {

    const state = {
      isNavShowing: false
    }

    const logState = () => {
      console.log(state);
    }

    return {
      state: state,
      logState: logState
    }
  })();

  // view/UI
  const UI = (() => {
    // load all event listeners...
    const getSelectors = () => {
      const navButton = document.getElementById('nav-button');
      const navCollapse = document.getElementById('nav-collapse');

      return {
        navButton: navButton,
        navCollapse: navCollapse
      }
    }

    return {
      getSelectors: getSelectors
    }
  })();

  // APP CONTROLLER
  const Website = ((state, ui) => {

    const loadEventListeners = () => {
      const selectors = ui.getSelectors()
      // EVENT LISTENERS...
      // click menu button...
      selectors.navButton.addEventListener('click', () => {
        if (selectors.navCollapse.classList.contains("hide")) {
          selectors.navCollapse.classList.remove("hide");
        }
        else {
          selectors.navCollapse.classList.add("hide");
        }
      });
    }
    
    const init = () => {
      loadEventListeners();
    };

    return {
      init: init
    }
  })(State, UI);

  Website.init();
}