import _ from "lodash";
import { Book } from "../hooks.ts/useBooks";

export function paginate(
  items: Book[],
  pageNumber: number,
  pageSize: number
): Book[] {
  const startingIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startingIndex).take(pageSize).value();
}
