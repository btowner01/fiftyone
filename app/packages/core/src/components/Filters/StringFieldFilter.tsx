import React from "react";
import * as fos from "@fiftyone/state";

import {
  isMatchingAtom,
  onlyMatchAtom,
  stringExcludeAtom,
  stringSelectedValuesAtom,
} from "@fiftyone/state";
import CategoricalFilter from "./categoricalFilter/CategoricalFilter";

const StringFieldFilter = ({
  path,
  modal,
  color,
  ...rest
}: {
  path: string;
  modal: boolean;
  name?: boolean;
  color: string;
  onFocus?: () => void;
  onBlur?: () => void;
  title: string;
}) => {
  return (
    <CategoricalFilter<{ value: string | null; count: number }>
      selectedValuesAtom={stringSelectedValuesAtom({ modal, path })}
      excludeAtom={stringExcludeAtom({ modal, path })}
      onlyMatchAtom={onlyMatchAtom({ modal, path })}
      isMatchingAtom={isMatchingAtom({ modal, path })}
      countsAtom={fos.stringCountResults({
        modal,
        path,
        extended: false,
      })}
      path={path}
      modal={modal}
      color={color}
      {...rest}
    />
  );
};

export default React.memo(StringFieldFilter);
