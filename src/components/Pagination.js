import React from "react";

function Pagination(url_prev, url_next, _onclick) {
  return (
    <React.Fragment>
    <ul className="pagination">
      <li className={url_prev === null ? "page-item disabled" : "page-item "}>
        <a
          className="page-link"
          href="#"
          onClick={
            () => url_prev !== null && _onclick(url_prev) // this.fetchCharacters(url_prev)
          }
          aria-label="Previous"
        >
          Previous
        </a>
      </li>

      {
        <li className={url_next === null ? "page-item disabled" : "page-item "}>
          <a
            className="page-link"
            href="#"
            onClick={
              () => url_next !== null && _onclick(url_next) // this.fetchCharacters(url_next)
            }
            aria-label="Next"
          >
            Next
          </a>
        </li>
      }
    </ul>
    </React.Fragment>
  );
}

export default Pagination;