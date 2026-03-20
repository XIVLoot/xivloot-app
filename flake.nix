{
  description = "XIVLoot Angular Dev Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { 
          inherit system; 
          config.allowUnfree = true; 
        };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # NodeJS and angular packages
            nodejs_24
            
            # Utilities
            git
          ];

          shellHook = ''
            echo "-------------------------------------------------------"
            echo "🚀 XIVLoot Angular Dev Environment"
            echo "-------------------------------------------------------"
            echo

            echo "Installing the depedencies..."
            npm install

            serve() {
              ng serve -o
            }
          '';
        };
      });
}
