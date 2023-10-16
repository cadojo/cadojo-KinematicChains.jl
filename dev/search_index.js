var documenterSearchIndex = {"docs":
[{"location":"#KinematicChains.jl","page":"Getting Started","title":"KinematicChains.jl","text":"","category":"section"},{"location":"","page":"Getting Started","title":"Getting Started","text":"Kinematic models for serial and parallel robotic manipulators!","category":"page"},{"location":"#Overview","page":"Getting Started","title":"Overview","text":"","category":"section"},{"location":"","page":"Getting Started","title":"Getting Started","text":"This package extends ModelingToolkit to represent robot manipulator kinematic models. All available models are shown on the Docstrings page. Consult the Models pages for more detail about each model in this package!","category":"page"},{"location":"#Usage","page":"Getting Started","title":"Usage","text":"","category":"section"},{"location":"","page":"Getting Started","title":"Getting Started","text":"If you're familiar with ModelingToolkit.jl, then you'll be able to use this package! Some KinematicChains-specific usage instructions are provided here. Please don't be shy about making Discourse posts, or filing issues on GitHub!","category":"page"},{"location":"#Installation-and-Setup","page":"Getting Started","title":"Installation & Setup","text":"","category":"section"},{"location":"","page":"Getting Started","title":"Getting Started","text":"This package can be installed just like any other registered Julia package.","category":"page"},{"location":"","page":"Getting Started","title":"Getting Started","text":"# To install wherever Julia code runs...\nimport Pkg\nPkg.add(\"KinematicChains\") # or ]add KinematicChains in Julia's REPL","category":"page"},{"location":"","page":"Getting Started","title":"Getting Started","text":"To load the package, simply enter using KinematicChains.","category":"page"},{"location":"","page":"Getting Started","title":"Getting Started","text":"using KinematicChains","category":"page"},{"location":"docstrings/#Documentation","page":"Docstrings","title":"Documentation","text":"","category":"section"},{"location":"docstrings/","page":"Docstrings","title":"Docstrings","text":"All docstrings!","category":"page"},{"location":"docstrings/","page":"Docstrings","title":"Docstrings","text":"Modules = [\n    KinematicChains\n]\nOrder = [:module, :type, :function]","category":"page"},{"location":"docstrings/#KinematicChains.KinematicChains","page":"Docstrings","title":"KinematicChains.KinematicChains","text":"Kinematic models for serial and parallel robotic manipulators.\n\nExtended Help\n\nExports\n\nMDHMatrix\nMDHRotation\nMDHTransformation\nMDHTranslation\nRx\nRy\nRz\nskew\n\nImports\n\nBase\nCoordinateTransformations\nCore\nDocStringExtensions\nLinearAlgebra\nModelingToolkit\nRotations\nStaticArrays\nSymbolics\n\n\n\n\n\n","category":"module"},{"location":"docstrings/#KinematicChains.MDHMatrix-NTuple{4, Real}","page":"Docstrings","title":"KinematicChains.MDHMatrix","text":"MDHMatrix(α, a, d, θ)\n\n\nGiven modified DH parameters, return the coordinate frame  matrix which maps frame i-1 to frame i.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#KinematicChains.MDHRotation-NTuple{4, Real}","page":"Docstrings","title":"KinematicChains.MDHRotation","text":"MDHRotation(α, a, d, θ)\n\n\nGiven modified DH parameters, return the coordinate rotation which maps orientation i-1 to frame i.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#KinematicChains.MDHTransformation-NTuple{4, Real}","page":"Docstrings","title":"KinematicChains.MDHTransformation","text":"MDHTransformation(α, a, d, θ)\n\n\nGiven modified DH parameters, return the coordinate mapping from frame i-1 to frame i.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#KinematicChains.MDHTranslation-NTuple{4, Real}","page":"Docstrings","title":"KinematicChains.MDHTranslation","text":"MDHTranslation(α, a, d, θ)\n\n\nGiven modified DH parameters, return the translation from frame  i-1 to frame i without any rotations applies.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#KinematicChains.Rx-Tuple{Real}","page":"Docstrings","title":"KinematicChains.Rx","text":"Rx(θ)\n\n\nAn active rotation about the X axis.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#KinematicChains.Ry-Tuple{Real}","page":"Docstrings","title":"KinematicChains.Ry","text":"Ry(θ)\n\n\nAn active rotation about the Y axis.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#KinematicChains.Rz-Tuple{Real}","page":"Docstrings","title":"KinematicChains.Rz","text":"Rz(θ)\n\n\nAn active rotation about the Z axis.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#KinematicChains.skew-Tuple{Real, Real, Real}","page":"Docstrings","title":"KinematicChains.skew","text":"skew(x, y, z)\n\n\nThe skew-symmetric matrix, which represents the vector cross-product.\n\n\n\n\n\n","category":"method"}]
}