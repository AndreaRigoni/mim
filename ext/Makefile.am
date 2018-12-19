include $(top_srcdir)/Common.mk
# include $(top_srcdir)/conf/kscripts/ext_ccStickers.mk
# include $(top_srcdir)/conf/kscripts/ext_libjit.mk
# include $(top_srcdir)/conf/kscripts/ext_llvm.mk
# include $(top_srcdir)/conf/kscripts/ext_nodejs_node.mk
# include $(top_srcdir)/conf/kscripts/ext_mdsplus.mk

define _ext_bootstrap
$(eval
$1/configure: | $1
	@ cd $1; ./bootstrap
)
endef

define _ext_autogen_sh
$(eval
$1/configure: | $1
	@ cd $1; ./autogen.sh
)
endef

define _ext_configure
$(eval
$1/config.log: $1/configure
	@ cd $1; ./configure $($(subst -,_,$(subst ' ',_,$(subst .,_,$1)))_CONFIGURE_ARGS)
$1/Makefile: $1/config.log
	@ $(MAKE) $(AM_MAKEFLAGS) -C $1 Makefile
)
endef

define _ext_cmake
$(eval
.PHONY: $1/CMakeCache.txt
$1/CMakeLists.txt: | $1
$1/CMakeCache.txt: $1/CMakeLists.txt
	@ cd $1; cmake $($(subst -,_,$(subst ' ',_,$(subst .,_,$1)))_CMAKE_ARGS) .
$1/Makefile: $1/CMakeCache.txt
)
endef


define _ext_cmake_offsrc
$(eval
.PHONY: $3/CMakeCache.txt
$2/CMakeLists.txt: | $2
$3/CMakeCache.txt: $2/CMakeLists.txt | $3
	@ cd $3; cmake $($(subst -,_,$(subst ' ',_,$(subst .,_,$1)))_CMAKE_ARGS) $(abspath $2)
$2/Makefile: $3/CMakeCache.txt
)
endef

ext-: ##@ext enter ext module with $TARGET
ext-%: %/Makefile
	@ $(MAKE) $(AM_MAKEFLAGS) -C $(subst ext-,,$@) $(TARGET)

all: TARGET = all
all: $(EXT_MODULES)

clean: TARGET = clean
clean: ext-libjit


list: ##@ext list defined ext modules
list : _item = $(info | $1: ) $(foreach x,$($1),$(info |  - $x))
list:
	@ \
	$(info ,-----------------------------------------------------------------) \
	$(info | ext modules defined ) \
	$(info |) \
	$(call _item,EXT_MODULES) \
	$(info |) \
	$(info |) \
	$(info `-----------------------------------------------------------------) :



# /////////////////////////////////////////////////////////////////////////// //
# //  EXT MODULES  ////////////////////////////////////////////////////////// //
# /////////////////////////////////////////////////////////////////////////// //

DOWNLOADS  = $(EXT_MODULES)

ccStickers: ##@ext download ccStickers sources
ccStickers_URL = $(CCSTICKERS_URL)
$(call _ext_bootstrap,ccStickers)
$(call _ext_configure,ccStickers)

llvm: ##@ext download llvm sources
llvm_URL   = http://llvm.org/git/llvm.git

EXT_MODULES += refclang
refclang: ##@ext refclang parser and reflection tool
refclang_URL = https://github.com/chakaz/reflang.git

EXT_MODULES += micro-service
micro-service: ##@ext microservice rest C++ implementation
micro_service_URL = https://github.com/ivanmejiarocha/micro-service.git
micro_service_BRANCH = master

EXT_MODULES += trisycl
trisycl: ##@ext trisycl
trisycl_URL = https://github.com/triSYCL/triSYCL.git
trisycl_BRANCH = master

EXT_MODULES += trisycl-llvm
trisycl-llvm: ##@ext trisycl llvm
trisycl_llvm_URL = https://github.com/triSYCL/llvm.git
trisycl_llvm_BRANCH = sycl/release_39/master
trisycl_llvm_DIR = $(abs_builddir)/trisycl/llvm

EXT_MODULES += trisycl-clang
trisycl-clang: ##@ext trisycl clang
trisycl_clang_URL = https://github.com/triSYCL/clang.git
trisycl_clang_BRANCH = sycl/release_39/master
trisycl_clang_DIR = $(abs_builddir)/trisycl/llvm/tools/clang

$(call _ext_cmake_offsrc,trisycl-llvm,trisycl/llvm,trisycl/llvm_build)
trisycl_llvm_CMAKE_ARGS = -DCMAKE_EXPORT_COMPILE_COMMANDS=1 \
  						-DLLVM_ENABLE_CXX1Y=On \
  						-DCMAKE_BUILD_TYPE=Release \
  						-DLLVM_TARGETS_TO_BUILD="X86" \
  						-DLLVM_BUILD_LLVM_DYLIB:BOOL=ON \
  						-DLLVM_LINK_LLVM_DYLIB:BOOL=ON   					


EXT_MODULES += jit-basics
jit-basics: ##@ext JitFromScratch jit-basics
jit_basics_URL = https://github.com/andrearigoni/JitFromScratch.git
jit_basics_BRANCH = jit-basics

EXT_MODULES += jit-clang
jit-clang: ##@ext JitFromScratch jit-clang
jit_clang_URL = https://github.com/andrearigoni/JitFromScratch.git
jit_clang_BRANCH = jit-from-source/cpp-clang

EXT_MODULES += cling
cling: ##@ext cling
cling_URL = https://github.com/root-project/cling.git

EXT_MODULES += clang
clang: ##@ext clang
clang: llvm
clang_URL = http://llvm.org/git/clang.git
clang_DIR = llvm/tools/clang

EXT_MODULES += clang-extra
clang-extra: ##@ext clang-extra
clang_extra_URL = http://llvm.org/git/clang-tools-extra.git
clang_extra_DIR = llvm/tools/clang/tools/clang-tools-extra

EXT_MODULES += compiler-rt
compiler-rt: ##@ext llvm compiler-rt
compiler_rt_URL = http://llvm.org/git/compiler-rt.git

llvm-all: llvm clang clang-extra compiler-rt

EXT_MODULES += avahi
avahi: ##@ext avahi bonjour protocol
avahi_URL    = https://github.com/lathiat/avahi.git
avahi_BRANCH = master




## //////////////////////////////////////////////////////////////////////////////
## //  XEUS  ////////////////////////////////////////////////////////////////////
## //////////////////////////////////////////////////////////////////////////////


EXT_MODULES += xeus
xeus: ##@ext zeus jupyter protocol in c++
xeus_URL     = https://github.com/QuantStack/xeus.git
xeus_CMAKE_ARGS = -D BUILD_EXAMPLES=yes
$(call _ext_cmake,xeus)

EXT_MODULES += nlohmann-json
nlohmann-json: ##@ext C++ modern json interface (needed by xeus)
nlohmann_json_URL = https://github.com/andrearigoni/jsonpp.git
nlohmann_json_DIR = $(abs_builddir)/nlohmann-json
export nlohmann_json_DIR
$(call _ext_cmake,nlohmann-json)

EXT_MODULES += xtl
xtl: ##@ext xtl for the QuantStack packages (xeus and xeus-cling)
xtl_URL = https://github.com/QuantStack/xtl.git
xtl_DIR = $(abs_builddir)/xtl
export xtl_DIR
$(call _ext_cmake,xtl)

EXT_MODULES += xeus-cling
xeus-cling: ##@ext xeus cling kernel
xeus_cling_URL = https://github.com/QuantStack/xeus-cling.git
$(call _ext_cmake,xeus-cling)

EXT_MODULES += cppzmq
cppzmq_URL   = https://github.com/zeromq/cppzmq.git
cppzmq_DIR   = $(abs_builddir)/cppzmq
export cppzmq_DIR
$(call _ext_cmake,cppzmq)
cppzmq_CMAKE_ARGS = -D CMAKE_BUILD_TYPE=Release
ext-cppzmq: TARGET=depend

EXT_MODULES += cryptopp
cryptopp_URL = https://github.com/weidai11/cryptopp.git
cryptopp_DIR = $(abs_builddir)/cryptopp
export cryptopp_DIR
$(call _ext_cmake,cryptopp)
cryptopp_CMAKE_ARGS = -D BUILD_SHARED=OFF \
                      -D BUILD_TESTING=OFF \
					  -D CMAKE_BUILD_TYPE=Release

EXT_MODULES += cryptopp-cmake
cryptopp_cmake_URL  = https://github.com/andrearigoni/cryptopp-cmake.git
cryptopp_cmake_DIR  = $(abs_builddir)/cryptopp/cmake

cryptopp_cmake_FILES = cryptopp/CMakeLists.txt cryptopp/cryptopp-config.cmake
$(cryptopp_cmake_FILES):
	@ ln -sf $(cryptopp_cmake_DIR)/$(@F) $@

## ADDS DEPS
ext-cryptopp: | cryptopp cryptopp/cmake $(cryptopp_cmake_FILES)
build-xeus:   | ext-nlohmann-json ext-xtl ext-cppzmq ext-cryptopp ext-xeus

## //////////////////////////////////////////////////////////////////////////////





nodejs-node:
nodejs_node_URL = $(NODEJS_NODE_URL)
nodejs_node_CONFIGURE_ARGS = --shared
$(call _ext_configure,nodejs-node)











EXT_MDSPLUS_URL    ?= https://github.com/mdsplus/mdsplus.git
EXT_MDSPLUS_BRANCH ?= alpha
ext-mdsplus: AM_MAKEFLAGS += -j1
mdsplus: ##@ext mdsplus
mdsplus_URL    = $(EXT_MDSPLUS_URL)
mdsplus_BRANCH = $(EXT_MDSPLUS_BRANCH)
$(call _ext_bootstrap,mdsplus)
$(call _ext_configure,mdsplus)



