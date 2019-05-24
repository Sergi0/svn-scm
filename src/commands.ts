import { Disposable } from "vscode";
import { Add } from "./commands/add";
import { AddToIgnoreExplorer } from "./commands/addToIgnoreExplorer";
import { AddToIgnoreSCM } from "./commands/addToIgnoreSCM";
import { ChangeList } from "./commands/changeList";
import { Checkout } from "./commands/checkout";
import { Cleanup } from "./commands/cleanup";
import { Close } from "./commands/close";
import { Commit } from "./commands/commit";
import { CommitWithMessage } from "./commands/commitWithMessage";
import { DeleteUnversioned } from "./commands/deleteUnversioned";
import { FileOpen } from "./commands/fileOpen";
import { FinishCheckout } from "./commands/finishCheckout";
import { GetModel } from "./commands/getModel";
import { Log } from "./commands/log";
import { OpenChangeBase } from "./commands/openChangeBase";
import { OpenChangeHead } from "./commands/openChangeHead";
import { OpenChangePrev } from "./commands/openChangePrev";
import { OpenFile } from "./commands/openFile";
import { OpenHeadFile } from "./commands/openHeadFile";
import { OpenResourceBase } from "./commands/openResourceBase";
import { OpenResourceHead } from "./commands/openResourceHead";
import { Patch } from "./commands/patch";
import { PatchAll } from "./commands/patchAll";
import { PatchChangeList } from "./commands/patchChangeList";
import { PromptAuth } from "./commands/promptAuth";
import { PromptRemove } from "./commands/promptRemove";
import { PullIncommingChange } from "./commands/pullIncomingChange";
import { Refresh } from "./commands/refresh";
import { RefreshRemoteChanges } from "./commands/refreshRemoteChanges";
import { Remove } from "./commands/remove";
import { RenameExplorer } from "./commands/renameExplorer";
import { Resolve } from "./commands/resolve";
import { ResolveAll } from "./commands/resolveAll";
import { Resolved } from "./commands/resolved";
import { Revert } from "./commands/revert";
import { RevertAll } from "./commands/revertAll";
import { RevertChange } from "./commands/revertChange";
import { RevertSelectedRanges } from "./commands/revertSelectedRanges";
import { SwitchBranch } from "./commands/switchBranch";
import { Update } from "./commands/update";
import { Upgrade } from "./commands/upgrade";
import { Model } from "./model";
import { CommitChangelist } from "./commands/commitChangelist";

export function registerCommands(model: Model, disposables: Disposable[]) {
  disposables.push(new GetModel(model));
  disposables.push(new FileOpen());
  disposables.push(new OpenFile());
  disposables.push(new PromptAuth());
  disposables.push(new CommitWithMessage());
  disposables.push(new Add());
  disposables.push(new ChangeList());
  disposables.push(new Refresh());
  disposables.push(new Commit());
  disposables.push(new OpenResourceBase());
  disposables.push(new OpenResourceHead());
  disposables.push(new OpenChangeBase());
  disposables.push(new SwitchBranch());
  disposables.push(new Revert());
  disposables.push(new Update());
  disposables.push(new PullIncommingChange());
  disposables.push(new PatchAll());
  disposables.push(new Patch());
  disposables.push(new PatchChangeList());
  disposables.push(new Remove());
  disposables.push(new ResolveAll());
  disposables.push(new Resolve());
  disposables.push(new Resolved());
  disposables.push(new Log());
  disposables.push(new RevertChange());
  disposables.push(new Close());
  disposables.push(new Cleanup());
  disposables.push(new FinishCheckout());
  disposables.push(new AddToIgnoreSCM());
  disposables.push(new AddToIgnoreExplorer());
  disposables.push(new RenameExplorer());
  disposables.push(new Upgrade());
  disposables.push(new RevertSelectedRanges());
  disposables.push(new OpenChangePrev());
  disposables.push(new PromptRemove());
  disposables.push(new Checkout());
  disposables.push(new RefreshRemoteChanges());
  disposables.push(new DeleteUnversioned());
  disposables.push(new OpenChangeHead());
  disposables.push(new OpenHeadFile());
  disposables.push(new RevertAll());
  disposables.push(new CommitChangelist());
}
