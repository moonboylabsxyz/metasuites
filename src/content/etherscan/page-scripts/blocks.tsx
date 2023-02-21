import { store } from '@src/store'
import { SCAN_PAGES } from '@common/constants'

import {
  convertUTC2locale,
  genExportTableDataBtn,
  genCopyIconBtn
} from '../feat-scripts'

const initBlocksPageScript = async (chain: string) => {
  const { utc2locale, exportTableData, showCopyIcon } = await store.get(
    'options'
  )

  if (utc2locale) convertUTC2locale(SCAN_PAGES.BLOCKS.name)
  if (exportTableData) genExportTableDataBtn(chain, SCAN_PAGES.BLOCKS.name)
  if (showCopyIcon) genCopyIconBtn(SCAN_PAGES.BLOCKS.name)
}

export default initBlocksPageScript
