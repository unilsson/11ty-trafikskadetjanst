(() => {
  "use strict";

  const input = document.querySelector("[data-customer-search]");
  const status = document.querySelector(
    "[data-customer-search-status]",
  );
  const emptyState = document.querySelector(
    "[data-customer-search-empty]",
  );
  const groups = Array.from(
    document.querySelectorAll(".customer-group"),
  );

  if (!input || !status || !emptyState || groups.length === 0) {
    return;
  }

  const normalise = (value) =>
    value
      .toLocaleLowerCase("sv-SE")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

  const filterCustomers = () => {
    const query = normalise(input.value.trim());
    let visibleNames = 0;
    let visibleGroups = 0;

    groups.forEach((group) => {
      const names = Array.from(
        group.querySelectorAll("[data-customer-name]"),
      );
      let groupMatches = 0;

      names.forEach((name) => {
        const matches =
          query === "" || normalise(name.textContent || "").includes(query);

        name.hidden = !matches;

        if (matches) {
          groupMatches += 1;
          visibleNames += 1;
        }
      });

      group.hidden = groupMatches === 0;

      if (groupMatches > 0) {
        visibleGroups += 1;

        if (query !== "") {
          group.open = true;
        }
      }
    });

    emptyState.hidden = visibleNames !== 0;

    if (query === "") {
      status.textContent = "";
      return;
    }

    status.textContent =
      visibleNames === 1
        ? "1 matchande organisation"
        : `${visibleNames} matchande organisationer i ${visibleGroups} kategorier`;
  };

  input.addEventListener("input", filterCustomers);
})();
