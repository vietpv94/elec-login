package main

import (
  "flag"
  "github.com/asticode/go-astilectron"
	"github.com/asticode/go-astilectron-bootstrap"
	"github.com/asticode/go-astilog"
  "github.com/pkg/errors"
)

var (
	AppName string
	BuiltAt string
	debug   = flag.Bool("d", false, "enables the debug mode")
	w       *astilectron.Window
)

func main() {
  flag.Parse()
  astilog.FlagInit()

  astilog.Debugf("Running app builte at %s", BuiltAt)
  if err:= bootstrap.Run(bootstrap.Options {
    AstilectronOptions: astilectron.Options {
      AppName: AppName,
      AppIconDarwinPath: "resources/icon.icns",
      AppIconDefaultPath: "resources/icon.png",
    },
    Debug: *debug,
    Homepage: "index.html",
    OnWait: func(_ *astilectron.Astilectron, iw *astilectron.Window, _ *astilectron.Menu, _ *astilectron.Tray, _ *astilectron.Menu) error {
			w = iw
			return nil
    },
    WindowOptions: &astilectron.WindowOptions{
			Height:          astilectron.PtrInt(600),
			Width:           astilectron.PtrInt(800),
    },
  }); err !=nil {
    astilog.Fatal(errors.Wrap(err, "running bootstrap failed"))
  }
}