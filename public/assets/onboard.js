
function pageCheck(keyword) {
  return location.href.toLowerCase().includes(keyword);
}
if (pageCheck("communityport")) {
  function getAuthMemberId() {
    const myHeaders = new Headers();
    myHeaders.append("Accept-Encoding", "gzip, deflate, br");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Connection", "keep-alive");
    myHeaders.append("DNT", "1");
    myHeaders.append("Origin", "https://api.bettermode.com");
    myHeaders.append("Authorization", `Bearer ${Tribe.client.accessToken}`);

    const raw = JSON.stringify({
      query: `query {
          authMember {
            id
          }
        }`
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    return fetch("https://api.bettermode.com/", requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(result => result.data.authMember.id)
      .catch(error => {
        console.error('Error:', error);
        throw error;
      });
  }

  let userID;

  async function initializeAuthId() {
    try {
      userID = await getAuthMemberId();
      console.log("userID", userID);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  initializeAuthId().then(() => {
    if (userID === "lsvwcvELYF") {
      let index = null;
      let currentItem = null;
      let targetPosition = 0;
      let itemInCenter = false;
      let elements;
      let details;
      if (pageCheck("communityport")) {

        elements = [
          { "class": "", "selector": ".logo[href='/']" },
          { "class": "", "selector": "[data-block-id='vDv30TY4CKuPsy_OAT3N3'] button:nth-child(1)" },
          { "class": "", "selector": "[data-block-id='vDv30TY4CKuPsy_OAT3N3'] button:nth-child(2)" },
          { "class": "", "selector": "[data-block-id='vDv30TY4CKuPsy_OAT3N3'] button:nth-child(3)" },
          { "class": "", "selector": "[data-block-id='vDv30TY4CKuPsy_OAT3N3'] button:nth-child(4)" },
          { "class": "", "selector": "[data-block-id='vDv30TY4CKuPsy_OAT3N3'] .mt-3 .flex.space-x-2.p-1" },
          { "class": "", "selector": ".border-card:first-child [href*='/messaging/new?member=']" },
          { "class": "", "selector": "[rel='noopener noreferrer nofollow ugc']" },
        ];

        details = [
          { title: "The Logo", description: "The logo in the upper left corner brings you back to the home feed." },
          { title: "The People", description: "See the list of players." },
          { title: "The People", description: "See the list of current parents." },
          { title: "The People", description: "See the list of alumini (parents and alums)." },
          { title: "The People", description: "See the list of Coaches." },
          { title: "The Search Feature", description: "Search the community port by any of these descripters." },
          { title: "The Message Button", description: "Click to message this person directly within sportport" },
          { title: "The Socials", description: "Click here to see their social media." },
        ];
      }

      const querySelector = (selector) => document.querySelector(selector);

      const next = querySelector('.tour-next');
      const prev = querySelector('.tour-prev');
      const widget = querySelector('.onboarding-widget__container');
      const tooltip = querySelector('.tour-tooltip');
      const tooltipHeading = querySelector('.tour-tooltip__header h2');
      const tooltipDescription = querySelector('.tour-tooltip__content');
      const tourProgressCta = querySelector('.tour-progress-cta');
      const tourEndCta = querySelector('.tour-end-cta');
      const takeTour = querySelector('.take-a-tour-btn');
      const restartButton = querySelector('.tour-tooltip__footer .restart');

      let tourNodes = [];
      let fieldData = [];

      function updateAuthMemberField(value) {
        const myHeaders = new Headers();
        myHeaders.append("Accept-Encoding", "gzip, deflate, br");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("DNT", "1");
        myHeaders.append("Origin", "https://api.bettermode.com");
        myHeaders.append("Authorization", `Bearer ${Tribe.client.accessToken}`);

        const raw = JSON.stringify({
          query: `mutation {
              updateAuthMember(input: { fields: [{ key: "on_board", value: ` + `"\\"${value}\\""` + ` }] }) {
                name
              }
            }`
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        fetch("https://api.bettermode.com/", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error('Error:', error));
      }

      function getAuthMemberField() {
        const myHeaders = new Headers();
        myHeaders.append("Accept-Encoding", "gzip, deflate, br");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("DNT", "1");
        myHeaders.append("Origin", "https://api.bettermode.com");
        myHeaders.append("Authorization", `Bearer ${Tribe.client.accessToken}`);

        const raw = JSON.stringify({
          query: `query {
              authMember {
                name
                fields {
                  key
                  value
                }
              }
            }`
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        return fetch("https://api.bettermode.com/", requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(result => result.data.authMember.fields)
          .catch(error => {
            console.error('Error:', error);
            throw error;
          });
      }

      async function initializeFieldData() {
        try {
          const result = await getAuthMemberField();
          const onBoardField = result.find(item => item.key === "on_board");
          const onBoardValue = onBoardField ? onBoardField.value : [];
          fieldData = (onBoardValue === "null") ? [] : JSON.parse(decodeURIComponent(onBoardValue).replace(/^"|"$/g, ''));
        } catch (error) {
          console.error('Error:', error);
        }
      }
      initializeFieldData().then(() => {
        tourNodes = elements.map(item => item.class ? querySelector(item.class) : querySelector(item.selector));
        console.log("tourNodes", tourNodes);

        const scrollToItem = (position) => {
          return new Promise(resolve => {
            window.scrollTo({ top: position, behavior: 'smooth' });
            setTimeout(resolve, 500);
          });
        };

        const inCenter = (element) => {
          const elementTop = element.getBoundingClientRect().top - window.scrollY;
          const center = window.innerHeight / 2;
          return (elementTop < (center + 100)) && (elementTop > (center - 100));
        };

        const writeWidget = () => {
          tooltipHeading.textContent = details[index].title;
          tooltipDescription.innerHTML = details[index].description;
          tourProgressCta.style.display = index === tourNodes.length - 1 ? 'none' : 'flex';
          tourEndCta.style.display = index === tourNodes.length - 1 ? 'flex' : 'none';
        };

        const showTooltip = async (element) => {
          itemInCenter = inCenter(element);
          writeWidget();
          const elementRect = element.getBoundingClientRect();
          const tooltipWidth = tooltip.offsetWidth;
          const tooltipHeight = tooltip.offsetHeight;
          let top = tooltipHeight / 2;
          let left = elementRect.left + window.scrollX + (elementRect.width / 2) - (tooltipWidth / 2);

          if (elementRect.height > top) {
            top = 120;
          } else if (elementRect.height < top) {
            top = -40;
          }

          const windowWidth = window.innerWidth;
          if (left + tooltipWidth + 20 < windowWidth) {
            if (left + tooltipWidth > windowWidth) {
              left = windowWidth - tooltipWidth - 10;
            } else if (left < 10) {
              left = 10;
            }
            tooltip.style.left = `${left}px`;
            tooltip.style.right = `unset`;
          } else {
            tooltip.style.right = `0`;
            tooltip.style.left = `unset`;
          }

          tooltip.style.top = `${top}px`;

          tooltip.style.display = 'block';
          tooltip.style.visibility = 'visible';
        };

        const processTour = async (item) => {
          if (index < tourNodes.length) {
            currentItem = item;
            targetPosition = currentItem.offsetTop;
            await scrollToItem(targetPosition).then(() => showTooltip(currentItem));
          } else {
            showTooltip();
          }
        };

        const restart = () => {
          tooltip.style.display = "block";
          tooltip.style.visibility = "hidden";
          tourInit();
        };

        function getSpace() {
          if (window.location.pathname === "/") {
            return "home";
          } else {
            let path = window.location.pathname;
            const regex = /^\/([^\/]+)\/([^\/]+)/;
            const match = path.match(regex);
            return match[1];
          }
        }

        function updateOrAddObject(array, newObj, key) {
          const index = array.findIndex(obj => obj[key] === newObj[key]);
          if (index !== -1) {
            array[index] = newObj;
          } else {
            array.push(newObj);
          }
          return array;
        }

        let on_board_value = [];

        const finish = () => {
          index = null;
          currentItem = null;
          widget.style.display = 'none';
          tooltip.style.display = "none";
          document.documentElement.style.overflow = 'initial';
          let spaceId = getSpace();
          tourNodes.forEach((elem) => {
            elem.removeAttribute("style");
          })
          let newobject;
          if (fieldData.length > 0) {
            let hasValue = fieldData.find(obj => obj.hasOwnProperty(getSpace()));
            newobject = { [spaceId]: hasValue[spaceId] ? 2 : 1 };
          } else {
            newobject = { [spaceId]: 1 };
          }

          updateOrAddObject(on_board_value, newobject, spaceId);
          const escapedValue = encodeURIComponent(JSON.stringify(on_board_value));
          updateAuthMemberField(escapedValue);
        };

        const tourInit = async () => {
          index = 0;
          document.documentElement.style.overflow = 'hidden';
          widget.style.display = 'flex';
          prev.classList.add('disable');
          next.classList.remove('disable');
          if (tourNodes.length <= 1) {
            prev.classList.add('disable');
            next.classList.add('disable');
          }
          tourNodes.forEach((elem) => {
            elem.removeAttribute("style");
          })
          tourNodes[index].style.zIndex = "103";
          tourNodes[index].style.border = "2px solid red";
          await scrollToItem(0).then(() => processTour(tourNodes[index]));
        };

        next.addEventListener('click', async () => {
          next.disabled = true;
          prev.classList.remove('disable');
          index = Math.min(index + 1, tourNodes.length - 1);
          next.classList.toggle('disable', index === tourNodes.length - 1);
          tourNodes.forEach((elem) => {
            elem.removeAttribute("style");
          })
          tourNodes[index].style.zIndex = "103";
          tourNodes[index].style.border = "2px solid red";
          await processTour(tourNodes[index]);
          next.disabled = false;
        });

        prev.addEventListener('click', async () => {
          prev.disabled = true;
          next.classList.remove('disable');
          index = Math.max(index - 1, 0);
          prev.classList.toggle('disable', index === 0);
          tourNodes.forEach((elem) => {
            elem.removeAttribute("style");
          })
          tourNodes[index].style.zIndex = "103";
          tourNodes[index].style.border = "2px solid red";
          await processTour(tourNodes[index]);
          prev.disabled = false;
        });

        takeTour.addEventListener("click", () => {
          restart();
        });

        restartButton.addEventListener('click', () => {
          restart();
        });

        document.addEventListener('click', (event) => {
          if (event.target.matches('.tour-tooltip__header .close, .tour-tooltip__footer .finish')) {
            if (event.target.classList.contains("close")) {
              index = null;
              currentItem = null;
              widget.style.display = "none";
              tooltip.style.display = "none";
              document.documentElement.style.overflow = 'initial';
              tourNodes.forEach((elem) => {
                elem.removeAttribute("style");
              })
            } else {
              finish();
            }
          }
        });

        window.addEventListener('resize', () => {
          if (currentItem) processTour(currentItem);
        });

        const renderWidget = () => {
          if (fieldData.length > 0) {
            let hasValue = fieldData.find(obj => obj.hasOwnProperty(getSpace()));
            if (hasValue[getSpace()] < 2) {
              tourInit();
            }
          } else {
            tourInit();
          }
          takeTour.disabled = false;
        };
        renderWidget();
      });
    }
  })
}