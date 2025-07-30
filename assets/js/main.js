/*
	Astral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $wrapper = $("#wrapper"),
    $main = $("#main"),
    $panels = $main.children(".panel"),
    $nav = $("#nav"),
    $nav_links = $nav.children("a");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["361px", "736px"],
    xsmall: [null, "360px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Nav.
  $nav_links.on("click", function (event) {
    var href = $(this).attr("href");

    // Not a panel link? Bail.
    if (href.charAt(0) != "#" || $panels.filter(href).length == 0) return;

    // Prevent default.
    event.preventDefault();
    event.stopPropagation();

    // Change panels.
    if (window.location.hash != href) window.location.hash = href;
  });

  // Panels.

  // Initialize.
  (function () {
    var $panel, $link;

    // Get panel, link.
    if (window.location.hash) {
      $panel = $panels.filter(window.location.hash);
      $link = $nav_links.filter('[href="' + window.location.hash + '"]');
    }

    // No panel/link? Default to first.
    if (!$panel || $panel.length == 0) {
      $panel = $panels.first();
      $link = $nav_links.first();
    }

    // Deactivate all panels except this one.
    $panels.not($panel).addClass("inactive").hide();

    // Activate link.
    $link.addClass("active");

    // Reset scroll.
    $window.scrollTop(0);
  })();

  // Hashchange event.
  $window.on("hashchange", function (event) {
    var $panel, $link;

    // Get panel, link.
    if (window.location.hash) {
      $panel = $panels.filter(window.location.hash);
      $link = $nav_links.filter('[href="' + window.location.hash + '"]');

      // No target panel? Bail.
      if ($panel.length == 0) return;
    }

    // No panel/link? Default to first.
    else {
      $panel = $panels.first();
      $link = $nav_links.first();
    }

    // Deactivate all panels.
    $panels.addClass("inactive");

    // Deactivate all links.
    $nav_links.removeClass("active");

    // Activate target link.
    $link.addClass("active");

    // Set max/min height.
    $main
      .css("max-height", $main.height() + "px")
      .css("min-height", $main.height() + "px");

    // Delay.
    setTimeout(function () {
      // Hide all panels.
      $panels.hide();

      // Show target panel.
      $panel.show();

      // Set new max/min height.
      $main
        .css("max-height", $panel.outerHeight() + "px")
        .css("min-height", $panel.outerHeight() + "px");

      // Reset scroll.
      $window.scrollTop(0);

      // Delay.
      window.setTimeout(
        function () {
          // Activate target panel.
          $panel.removeClass("inactive");

          // Clear max/min height.
          $main.css("max-height", "").css("min-height", "");

          // IE: Refresh.
          $window.triggerHandler("--refresh");

          // Unlock.
          locked = false;
        },
        breakpoints.active("small") ? 0 : 500
      );
    }, 250);
  });

  // IE: Fixes.
  if (browser.name == "ie") {
    // Fix min-height/flexbox.
    $window.on("--refresh", function () {
      $wrapper.css("height", "auto");

      window.setTimeout(function () {
        var h = $wrapper.height(),
          wh = $window.height();

        if (h < wh) $wrapper.css("height", "100vh");
      }, 0);
    });

    $window.on("resize load", function () {
      $window.triggerHandler("--refresh");
    });

    // Fix intro pic.
    $(".panel.intro").each(function () {
      var $pic = $(this).children(".pic"),
        $img = $pic.children("img");

      $pic
        .css("background-image", "url(" + $img.attr("src") + ")")
        .css("background-size", "cover")
        .css("background-position", "center");

      $img.css("visibility", "hidden");
    });
  }
})(jQuery);

const imgs = [
  { src: "Portafolio/JPG/Azure.jpg", alt: "Azure" },
  {
    src: "Portafolio/JPG/Excel - Agraound Capacitacion.jpg",
    alt: "Excel-Capacitacion",
  },
  { src: "Portafolio/JPG/Github Desktop.jpg", alt: "Github Desktop" },
  { src: "Portafolio/JPG/MongoDB.jpg", alt: "MongoDB" },
  { src: "Portafolio/JPG/MSSQL.jpg", alt: "MSSQL" },
  { src: "Portafolio/JPG/MySQL.jpg", alt: "MySQL" },
  { src: "Portafolio/JPG/PostgreSQL.jpg", alt: "PostgreSQL" },
  {
    src: "Portafolio/JPG/Power BI Chain X Seven.jpg",
    alt: "Power_BI-ChainXSeven",
  },
  {
    src: "Portafolio/JPG/Prototipo en Figma.jpg",
    alt: "Ayunint-Prototipo-Figma",
  },
  { src: "Portafolio/JPG/Python en Azure.jpg", alt: "Python-AzureDS" },
  { src: "Portafolio/JPG/T SQL en Azure.jpg", alt: "Notebook-AzureDS" },
  { src: "Portafolio/JPG/VSCode - Jupyter Python.jpg", alt: "VS-Code" },
];

let indexImg = 0;

const openModal = (key) => {
  indexImg = key;
  document.querySelector(".modal-img").style = `
	background-image: url('${imgs[key].src}');
  `;
  document.querySelector(".modal-container").classList.remove("d-none");
  document.querySelector(".index-gallery").textContent = `${indexImg + 1}/${
    imgs.length
  }`;
};
const closeModal = () => {
  document.querySelector(".modal-container").classList.add("d-none");
};

const nextImg = () => {
  if (indexImg < imgs.length - 1) {
    indexImg++;
    document.querySelector(".modal-img").style = `
            background-image: url('${imgs[indexImg].src}');
        `;
    document.querySelector(".index-gallery").textContent = `${indexImg + 1}/${
      imgs.length
    }`;
  }
};

const backImg = () => {
  if (indexImg > 0) {
    indexImg--;
    document.querySelector(".modal-img").style = `
            background-image: url('${imgs[indexImg].src}');
        `;
    document.querySelector(".index-gallery").textContent = `${indexImg + 1}/${
      imgs.length
    }`;
  }
};

if (document.querySelector(".gallery-projects")) {
  const content = imgs
    ?.map(
      (obj, i) => `
		<div onclick="openModal(${i})" class="col-4 col-6-medium col-12-small item-${i}">
			<div class="image fit">
				<img src="${obj?.src}" alt="${obj?.alt}"/>
			</div>
		</div>
	`
    )
    ?.join("");
  document
    .querySelector(".gallery-projects")
    ?.insertAdjacentHTML("beforeend", content);
}
const getStarted = () => {
  window.location = "#work";
};
